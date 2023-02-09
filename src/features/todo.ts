interface Todo {
  todoId: string;
  content: string;
  idDone: boolean;
  category: string;
  tags?: string[];
}

/**
 * 할 일을 추가 한 뒤, 할 일 리스트를 반환합니다.
 */
function addTodo(todo: Todo): Todo[] {}

/**
 * 할 일 리스트를 조회합니다.
 *
 * userId를 입력하지 않으면 모든 할 일을 조회합니다.
 */
function getTodo(todoId?: string): Todo {}

/**
 * 할 일을 수정 합니다.
 */
function updateTodo(todo: Todo): Todo {}

/**
 * 특정 할 일의 특정 태그를 수정합니다.
 */
function updateTagById(todoId: string, tags: string[]): Todo[] {}

/**
 * userId를 기반으로 특정 할 일을 삭제합니다.
 */
function removeTodoById(todoId: string): void {}

/**
 * 모든 할 일을 제거합니다.
 */
function removeAllTodo(): void {}

/**
 * 특정 할 일의 특정 태그를 삭제합니다.
 */
function removeTag(todo: Pick<Todo, "todoId" | "tags">): void {}

/**
 * 특정 할 일의 모든 태그를 삭제 합니다.
 */
function removeAllTags(todoId: string): void {}
