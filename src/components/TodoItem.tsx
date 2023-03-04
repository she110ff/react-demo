import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Checkbox, Text, IconButton } from '@chakra-ui/react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Todo } from '../store/types';
import { toggleTodo, deleteTodo } from '../store/actions/todoActions';

interface Props {
    todo: Todo;
}

function TodoItem({ todo }: Props) {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTodo({
            ...todo,
            completed: !todo.completed
        }));
    };

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
    };

    return (
        <Box d="flex" alignItems="center" mb={4}>
            <Checkbox
                isChecked={todo.completed}
                onChange={handleToggle}
                mr={4}
            />
            <Text fontSize="lg" mr="auto" textDecoration={todo.completed ? 'line-through' : 'none'}>
                {todo.text}
            </Text>
            <IconButton
                icon={<RiDeleteBinLine />}
                aria-label="삭제"
                variant="ghost"
                colorScheme="red"
                onClick={handleDelete}
            />
        </Box>
    );
}

export default TodoItem;
