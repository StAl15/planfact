import OperationHeader from "../components/Layouts/OperationLayout/OperationHeader";
import FilterComponent from "../components/GlobalComponents/FilterBar/FilterComponent";
import OperationBottom from "../components/Layouts/OperationLayout/OperationBottom";
import OperationMain from "../components/Layouts/OperationLayout/OperationMain";

export const OperationsPage = () => {
  return (
    <div className='flex max-h-screen'>
      <div className='w-full max-w-[250px] px-[15px] overflow-y-auto border-r-[1px] border-[#C7C7CF]'>
        <FilterComponent />
      </div>
      <div className='w-full h-screen flex flex-col'>
        <div className='pl-[20px] pr-[40px] py-[12px] bg-white'>
          <OperationHeader />
        </div>
        <div className='grow bg-white'>
          <OperationMain />
        </div>
        <div className='pl-[20px] pr-[40px] py-[12px]'>
          <OperationBottom />
        </div>
      </div>
    </div>
  );
};

