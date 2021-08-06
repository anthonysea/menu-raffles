import { firestore } from "./firebase/firebase";
import firebase from "firebase";

export const getRaffle = async (id) => {
  console.log("[getRaffle] id: ", id);
  const raffleRef = firestore.collection("raffles").doc(id);
  let docSnapshot = await raffleRef.get();
  console.log("[getRaffle] docSnapshot.data(): ", docSnapshot.data());

  const raffle = {
    id: docSnapshot.id,
    name: docSnapshot.data().name,
    sizeRun: docSnapshot.data().sizeRun,
    endDate: docSnapshot.data().endDate.toDate(),
    bcOnly: docSnapshot.data().bcOnly,
  };
  return raffle;
};

export const getAllRaffleIds = async () => {
  const rafflesRef = firestore.collection("raffles");
  let querySnapshot = await rafflesRef.get();

  let raffleIds = [];

  querySnapshot.forEach((doc) => {
    raffleIds.push({
      params: {
        id: doc.id,
      },
    });
  });

  return raffleIds;
};

export const getAllRaffles = async () => {
  const rafflesRef = firestore.collection("raffles");
  let querySnapshot = await rafflesRef.get();

  let raffles = [];

  // Add code to check if a raffle is ongoing or not

  querySnapshot.forEach((doc) => {
    raffles.push({
      id: doc.id,
      name: doc.data().name,
      sizeRun: doc.data().sizeRun,
      endDate: doc.data().endDate.toDate(),
      ongoing: doc.data().ongoing,
      bcOnly: doc.data().bcOnly,
    });
  });

  return raffles;
};

// Get the entries of a given raffle id
const getEntriesForRaffle = async (id) => {
  const raffleRef = firestore.collection("raffles").doc(id);
  const raffleSnap = await raffleRef.get();

  // Can use either .get("entries") or .data().entries
  // Opted for .get("entries") as it only retrives the entries field as oppposed to all the key-value pairs
  const entries = raffleSnap.get("entries");
  // const entries = raffleSnap.data().entries;
  return entries;
};

// Validates entry against other entries in the raffle
// returns true when the entry is valid aka unique address, phone number, and email
// return false otherwise
const validateEntry = (entries, newEntry) => {
  // TODO: Validate against banned emails, banned addresses, banned phone numbers

  if (
    entries.some(
      (entry) =>
        entry.address === newEntry.address &&
        entry.addressExt === newEntry.addressExt &&
        entry.city === newEntry.city &&
        entry.postalCode === newEntry.postalCode &&
        entry.province === newEntry.province
    )
  ) {
    // TODO: Add address to banned list of addresses in firebase
    console.log("Duplicate address");
    return false;
  }
  // Check if phoneNumber has been seen before
  if (entries.some((entry) => entry.phoneNumber === newEntry.phoneNumber)) {
    // TODO: Add phone Number to banned list of phone numbers in firebase
    console.log("Duplicate phone number");
    return false;
  }
  // Check if email has been seen before
  if (entries.some((entry) => entry.email === newEntry.email)) {
    // TODO: Add email to banned list of emails in firebase
    console.log("Duplicate email")
    return false;
  }

  return true;
};

export const addEntryToRaffle = async (id, newEntry) => {
  const raffleRef = firestore.collection("raffles").doc(id);
  const entries = await getEntriesForRaffle(id);

  if (validateEntry(entries, newEntry)) {
    raffleRef
      .update({
        // Have to use firebase.firestore here or the app errors out
        entries: firebase.firestore.FieldValue.arrayUnion(newEntry),
      })
      .then((res) => {
        console.log("Successfully added entry");
        return true;
      });
  } else {
    return false;
  }

};
