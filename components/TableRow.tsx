interface TableRowProps {
  name: string;
  category: string;
  city: string;
  fee: string;
}

export default function TableRow({ name, category, city, fee }: TableRowProps) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-2">{name}</td>
      <td className="p-2">{category}</td>
      <td className="p-2">{city}</td>
      <td className="p-2">{fee}</td>
      <td className="p-2">
        <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm">
          View
        </button>
      </td>
    </tr>
  );
}
