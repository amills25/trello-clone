import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "647605deccae97640415",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
