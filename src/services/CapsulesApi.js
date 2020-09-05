import capsules from "data/capsules";
import { LATENCY } from "config/mockServer";

const newCapsule = {
  title: "Conheça mais sobre o Hubblefy",
  isFixed: false,
  isRead: false,
  status: "signed",
  createdAt: "1 hora atrás",
  notificationCount: 12,
  category: 1,
  attachments: [
    {
      type: "text",
      url: "#",
    },
    {
      type: "googlesheet",
      url: "#",
    },
    {
      type: "googledoc",
      url: "#",
    },
  ],
};

export default class CapsulesApi {
  static getAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const storedCapsules = localStorage.getItem("capsules");

        if (storedCapsules) {
          resolve(JSON.parse(storedCapsules));
        } else {
          localStorage.setItem("capsules", JSON.stringify(capsules));
          resolve(capsules);
        }
      }, LATENCY);
    });
  }

  static addCapsule() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const storedCapsules = localStorage.getItem("capsules");

        localStorage.setItem(
          "capsules",
          JSON.stringify([
            ...JSON.parse(storedCapsules),
            { id: storedCapsules.length + 1, ...newCapsule },
          ])
        );

        resolve({ status: 201, message: "ok" });
      }, LATENCY);
    });
  }
}
