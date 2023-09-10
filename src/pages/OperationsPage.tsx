import OperationHeader from "../components/Layouts/OperationLayout/OperationHeader";
import FilterComponent from "../components/GlobalComponents/FilterBar/FilterComponent";
import OperationBottom from "../components/Layouts/OperationLayout/OperationBottom";
import OperationMain from "../components/Layouts/OperationLayout/OperationMain";

export const OperationsPage = () => {
  return (
    <div className="flex">
      <FilterComponent />
      <div className="w-full flex flex-col h-full ml-[15px]">
        <OperationHeader />
        <OperationMain />
        <OperationBottom />
      </div>
    </div>
  );
};