import "./ContactLog.css";

function ContactLog() {
  return (
    <div className="">
      <div className="">
        <table className="flex flex-col w-auto border border-black rounded-x bg-gray-500 text-sm text-left text-gray-500 dark:text-gray-400">
          <tr className="flex text-white">
            <th>Lastname</th>
            <th>Firstname</th>
            <th>Email</th>
            <th>Contact#</th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ContactLog;
