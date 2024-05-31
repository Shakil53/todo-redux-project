import Container from "@/components/ui/Container";
import TodoContainer from "./TodoContainer";

const Todo = () => {
    return (
        <Container>
            <h1 className="text-center text-3xl font-bold my-10 ">MY TODO</h1>
            <TodoContainer></TodoContainer>
        </Container>
    );
};

export default Todo;