-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "itemName" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);
