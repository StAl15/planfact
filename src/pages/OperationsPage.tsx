import OperationHeader from "../components/Layouts/OperationLayout/OperationHeader";
import FilterComponent from "../components/GlobalComponents/FilterBar/FilterComponent";

export const OperationsPage = () => {
  return (
    <div className="flex">
      <FilterComponent />
      <div className="w-full">
        <OperationHeader />
      </div>
    </div>
  );
};