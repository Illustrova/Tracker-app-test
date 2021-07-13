import { useStore } from "nanostores/react";
import { sessions } from "../store/sessions";
import { getHours, getMinutes, getSeconds } from "../utils";

const Row = ({ start, end, duration }) => {
  return (
    <tr className="bg-white border-4 border-gray-200">
      <td className="px-16 py-2">{new Date(start).toLocaleString()}</td>
      <td className="px-16 py-2">{new Date(end).toLocaleString()}</td>
      <td className="px-16 py-2">
        {getHours(duration)}:{getMinutes(duration)}:{getSeconds(duration)}
      </td>
    </tr>
  );
};

export default function Table() {
  const data = useStore(sessions);
  return (
    <table className="min-w-full table-auto">
      <thead className="justify-between">
        <tr className="bg-gray-800">
          <th className="px-16 py-2">
            <span className="text-gray-200">Started at</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Ended at</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Duration</span>
          </th>
        </tr>
      </thead>
      <tbody className="h-4 text-gray-800 bg-gray-200">
        {data && data.length > 0 ? (
          data.map((item) => <Row key={item.start} {...item} />)
        ) : (
          <tr className="text-gray-800 bg-white border-4 border-gray-200">
            <td colSpan="4">No data tracked yet</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
