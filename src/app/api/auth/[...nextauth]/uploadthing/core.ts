import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UTApi } from "uploadthing/server";

const f = createUploadthing();
export const utapi = new UTApi();

export const ourFileRouter = {
  profileImageUploader: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
  })
    .onUploadComplete(({ file }) => {
      console.log("Uploaded file:", file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
