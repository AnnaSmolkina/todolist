export type TasksBlockPropsType = {
block: TaskListType
};

export type TaskType = {
    taskName: string,
    description: string
}

export type TaskListType = {
    title: string,
    tasksList: TaskType[]
}

export type TaskPropsType = {
    task: TaskType
}

export type TaskStatus = {
    isFinished: boolean
}