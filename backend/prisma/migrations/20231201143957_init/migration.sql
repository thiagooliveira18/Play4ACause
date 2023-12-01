-- CreateTable
CREATE TABLE "usuarios" (
    "id_user" TEXT NOT NULL,
    "email" VARCHAR(256) NOT NULL,
    "usuario" VARCHAR(256) NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "menssagens" (
    "id_msg" TEXT NOT NULL,
    "texto" VARCHAR(256) NOT NULL,
    "data_hora" TEXT NOT NULL,
    "autor_id" TEXT NOT NULL,
    "chat_id" TEXT NOT NULL,

    CONSTRAINT "menssagens_pkey" PRIMARY KEY ("id_msg")
);

-- CreateTable
CREATE TABLE "chats" (
    "id_chat" TEXT NOT NULL,
    "nome" VARCHAR(256) NOT NULL,

    CONSTRAINT "chats_pkey" PRIMARY KEY ("id_chat")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_usuario_key" ON "usuarios"("usuario");

-- AddForeignKey
ALTER TABLE "menssagens" ADD CONSTRAINT "menssagens_autor_id_fkey" FOREIGN KEY ("autor_id") REFERENCES "usuarios"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "menssagens" ADD CONSTRAINT "menssagens_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "chats"("id_chat") ON DELETE NO ACTION ON UPDATE NO ACTION;
