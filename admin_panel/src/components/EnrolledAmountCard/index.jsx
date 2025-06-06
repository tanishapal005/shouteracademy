


const EnrolledAmountCard = ({ amount }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-black flex flex-col justify-between">
      <div className="flex flex-row justify-between">
        <h3 className="text-xl font-semibold">Enrolled Amount</h3>
        <p className="text-2xl font-normal mt-0">${amount}</p>
      </div>

      <p className="text-xs text-gray-700 self-start mt-[-2px]">Number of Enrolled</p>
    </div>
  );
};

export default EnrolledAmountCard;
