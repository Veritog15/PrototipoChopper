-- CreateTable
CREATE TABLE "Registro" (
    "id" SERIAL NOT NULL,
    "pulso" INTEGER NOT NULL,
    "spo2" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Registro_pkey" PRIMARY KEY ("id")
);
