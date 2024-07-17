"use client";

import { useTranslation } from "react-i18next";

export default function Clientcomponent() {
  const { t } = useTranslation();
  const userName = "Tony";
  return (
    <>
      <h3>{t("subheader", { userName })}</h3>
    </>
  );
}
