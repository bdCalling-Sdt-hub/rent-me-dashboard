import { FaUsers } from "react-icons/fa6";
import { useGeneralStatsQuery } from "../../../redux/apiSlices/dashboardSlice";
import rentMeLogo from "../../../assets/navLogo.png";

const GeneralStateSection = () => {
  const { data: generalState, isLoading } = useGeneralStatsQuery();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <img src={rentMeLogo} alt="" />
      </div>
    );
  }

  const state = generalState?.data;

  return (
    <div className="grid md:grid-cols-5 gap-6 md:h-[80px]">
      <div className="bg-white rounded-2xl  py-0 px-6 flex items-center justify-start gap-4">
        <div className="w-16 h-16 rounded-full bg-[#fcf5f2] flex items-center justify-center">
          <FaUsers color="#ff5f02" className="" size={24} />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-center text-2xl text-base ">Total User</h2>
          <h3 className="text-center text-2xl font-semibold">
            {state?.totalActiveUsers}
          </h3>
        </div>
      </div>
      <div className="bg-white rounded-2xl  py-0 px-6 flex items-center justify-start gap-4">
        <div className="w-16 h-16 rounded-full bg-[#fcf5f2] flex items-center justify-center">
          <FaUsers color="#ff5f02" className="" size={24} />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-center text-2xl text-base ">New Sign Ups</h2>
          <h3 className="text-center text-2xl font-semibold">
            {state?.newSignups}
          </h3>
        </div>
      </div>
      <div className="bg-white rounded-2xl  py-0 px-6 flex items-center justify-start gap-4">
        <div className="w-16 h-16 rounded-full bg-[#fcf5f2] flex items-center justify-center">
          <FaUsers color="#ff5f02" className="" size={24} />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-center text-2xl text-base ">Active Vendors</h2>
          <h3 className="text-center text-2xl font-semibold">
            {state?.totalActiveVendors}
          </h3>
        </div>
      </div>
      <div className="bg-white rounded-2xl  py-0 px-6 flex items-center justify-start gap-4">
        <div className="w-16 h-16 rounded-full bg-[#fcf5f2] flex items-center justify-center">
          <FaUsers color="#ff5f02" className="" size={24} />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-center text-2xl text-base ">Completed Orders</h2>
          <h3 className="text-center text-2xl font-semibold">
            {state?.totalCompletedOrders}
          </h3>
        </div>
      </div>
      <div className="bg-white rounded-2xl  py-0 px-6 flex items-center justify-start gap-4">
        <div className="w-16 h-16 rounded-full bg-[#fcf5f2] flex items-center justify-center">
          <FaUsers color="#ff5f02" className="" size={24} />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-center text-2xl text-base ">Total Services</h2>
          <h3 className="text-center text-2xl font-semibold">
            {state?.totalServices}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default GeneralStateSection;
