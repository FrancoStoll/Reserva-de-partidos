-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'cliente'
);
INSERT INTO "new_User" ("email", "id", "name", "password", "role", "telefono") SELECT "email", "id", "name", "password", "role", "telefono" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check("User");
PRAGMA foreign_keys=ON;
