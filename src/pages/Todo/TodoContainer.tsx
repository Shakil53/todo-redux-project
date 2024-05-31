import { Button } from "@/components/ui/button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
    return (
        <div>
            <div className="flex justify-between mb-5">
                <Button className="bg-primary-gradient text-xl font-semibold">Add todo</Button>
                <Button className="bg-primary-gradient text-xl font-semibold">Filter</Button>
            </div>
            <div className="bg-primary-gradient w-full h-full rounded-lg p-[3px]">
                <div className="bg-slate-100 p-4 w-full h-full rounded-lg space-y-3">
                <TodoCard></TodoCard>
                <TodoCard></TodoCard>
                <TodoCard></TodoCard>
                <TodoCard></TodoCard>
               </div>
                {/* <div className="bg-red-700 p-3 flex  rounded-lg justify-center items-center text-white">
                    <p>There is no task pending</p>
              </div> */}
            </div>
        </div>
    );
};

export default TodoContainer;