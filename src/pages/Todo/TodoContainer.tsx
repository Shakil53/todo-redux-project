import TodoCard from "./TodoCard";
import AddTodoModal from "./AddTodoModal";
import TodoFilter from "./TodoFilter";
// import { useAppSelector } from "@/redux/hook";
import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";



const TodoContainer = () => {
    const [priority, setPriority] = useState("")
  
    // From local state
    // const { todos } = useAppSelector((state) => state.todos);

    // From server
    const { data: todos, isLoading } = useGetTodosQuery(priority)
    // console.log(todos);
    if (isLoading) {
        return <p>Loading..</p>
    }
    return (
        <div>
            <div className="flex justify-between mb-5">
                <AddTodoModal></AddTodoModal>
                <TodoFilter priority={priority} setPriority={setPriority}></TodoFilter>
            </div>
            <div className="bg-primary-gradient w-full h-full rounded-lg p-[3px]">
                <div className="bg-slate-100 p-4 w-full h-full rounded-lg space-y-3">
                    {
                        todos?.data.map(item => <TodoCard key={item._id} {...item}></TodoCard>)
                }
               </div>
                {/* <div className="bg-red-700 p-3 flex  rounded-lg justify-center items-center text-white">
                    <p>There is no task pending</p>
              </div> */}
            </div>
        </div>
    );
};

export default TodoContainer;