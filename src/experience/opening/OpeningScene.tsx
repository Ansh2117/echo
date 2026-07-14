"use client";

import Blueprint from "./Blueprint";
import DraftNotes from "./DraftNotes";
import Pulse from "./Pulse";

export default function OpeningScene() {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-[#050505]">
      <Blueprint />
      <DraftNotes />
      <Pulse />
    </section>
  );
}
