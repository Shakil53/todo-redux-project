import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAddTodosMutation } from "@/redux/api/api";
// import { addTodo } from "@/redux/features/todoSlice";
// import { useAppDispatch } from "@/redux/hook";
import { FormEvent, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const AddTodoModal = () => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');

console.log(priority);

  //! Local state management
  // const dispatch = useAppDispatch();

  //* For Server
  //? [actualFunctionForPost, {data, isLoading, isError, . .}]
  const [addTodo, { data, isLoading, isError, isSuccess }] = useAddTodosMutation();

  console.log(data, isLoading, isSuccess, isError);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    // const randomString = Math.random().toString(36).substring(2, 7);

    const taskDetails = {
      // id: randomString,
      title: task,
      description: description,
      isCompleted: false,
      priority: priority, 
    }
    console.log("Inside modal",taskDetails);
    //! Local state management
    // dispatch(addTodo(taskDetails))

    //for server
    addTodo(taskDetails)
  }
    return (
        <Dialog>
        <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-xl font-semibold">Add todo</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={onSubmit}>
          <DialogHeader className="mx-auto">
            <DialogTitle className="text-center">Add task</DialogTitle>
            <DialogDescription>
              Add your tasks that you want to finish.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                 onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Priority
              </Label>
              <Select onValueChange={(value) => setPriority(value)}>
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder="Select for priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Priority</SelectLabel>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectGroup>
            </SelectContent>
    </Select>
            </div>
          </div>
            <DialogFooter>
              <DialogClose asChild>
                  <Button type="submit" className="bg-blue-500 hover:bg-green-500">Submit</Button>
              </DialogClose>
          </DialogFooter>
        </form>
        </DialogContent>
      </Dialog>
    );
};

export default AddTodoModal;