import { useQuery } from "react-query"
import taskService from "../taskService"
import { Task } from "../tasks.types"

const useFetchTasks = (id: string) => {
  return useQuery(`${id}`, () => taskService.fetchTasks(id), {
    select: (data) => {
      const tasks = data.data.map((task: Task) => task)
      return tasks
    },
  })
}

export default useFetchTasks