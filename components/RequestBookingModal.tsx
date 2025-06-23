// FILE: components/RequestBookingModal.tsx
"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useForm, SubmitHandler } from "react-hook-form";

interface BookingFormValues {
  name: string;
  email: string;
  message: string;
}

interface Props {
  artistName: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function RequestBookingModal({ artistName, isOpen, onClose }: Props) {
  const { register, handleSubmit, reset } = useForm<BookingFormValues>();

  const onSubmit: SubmitHandler<BookingFormValues> = (data) => {
    const booking = {
      artist: artistName,
      ...data,
    };
    console.log("Booking Request Submitted:", booking);
    alert("Booking request submitted!");
    reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4 bg-black/50">
        <DialogPanel className="bg-white rounded-md shadow-xl max-w-md w-full p-6">
          <DialogTitle className="text-lg font-bold mb-4">Request Booking</DialogTitle>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block font-medium text-sm">Artist</label>
              <input
                value={artistName}
                disabled
                className="w-full border px-3 py-2 rounded bg-gray-100"
              />
            </div>
            <div>
              <label className="block font-medium text-sm">Your Name</label>
              <input {...register("name")} required className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block font-medium text-sm">Email</label>
              <input type="email" {...register("email")} required className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block font-medium text-sm">Message</label>
              <textarea rows={3} {...register("message")} className="w-full border px-3 py-2 rounded" />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit Request
            </button>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
}