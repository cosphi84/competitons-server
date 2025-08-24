-- CreateTable
CREATE TABLE "devices" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "number" INTEGER,
    "start" DATETIME,
    "end" DATETIME,
    "duration" DATETIME
);
