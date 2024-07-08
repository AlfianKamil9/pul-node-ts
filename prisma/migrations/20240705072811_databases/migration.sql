-- CreateTable
CREATE TABLE "Roles" (
    "id_role" SERIAL NOT NULL,
    "role_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id_role")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "role_id" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_role_id_key" ON "User"("role_id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Roles"("id_role") ON DELETE RESTRICT ON UPDATE CASCADE;
