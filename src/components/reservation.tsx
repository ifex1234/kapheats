"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useStore from "@/hooks/zustand";

export function ReserveTable() {
  const reservations = useStore((state) => state.booking);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Purpose</TableHead>
          <TableHead>Meal</TableHead>
          <TableHead>Number of Persons</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reservations.map((myReservation, index) => (
          <TableRow key={index}>
            <TableCell>{myReservation.name}</TableCell>
            <TableCell className="font-medium">
              {myReservation.dob instanceof Date
                ? myReservation.dob.toLocaleDateString()
                : new Date(myReservation.dob).toLocaleDateString()}
            </TableCell>
            <TableCell>{myReservation.purpose}</TableCell>
            <TableCell>{myReservation.meal}</TableCell>
            <TableCell>{myReservation.numberOfPersons}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
