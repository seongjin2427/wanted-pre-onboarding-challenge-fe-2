/**
 * @typedef {Object} Todo
 * @property {string} todoId - 아이디
 * @property {string} content - 내용
 * @property {boolean} isDone - 완료 여부
 * @property {string} category - 카테고리
 * @property {string[]} [tags] - 태그
 */

/**
 * 할 일을 생성합니다.
 * @param {Object} todo
 * @param {string} todo.todoId - 아이디
 * @param {string} todo.content - 내용
 * @param {boolean} todo.isDone - 완료 여부
 * @param {string} todo.category - 카테고리
 * @param {string[]} [todo.tags] - 태그
 */
function addTodo(todo) {}

/**
 * 할 일 리스트를 조회합니다.
 *
 * userId를 입력하지 않으면 모든 할 일을 조회합니다.
 * @param {string} [todoId] - 할 일 id
 * @returns {Todo|Todo[]} todo
 */
function getTodo(todoId) {}

/**
 * 할 일을 수정 합니다.
 * @param {Todo} todo
 */
function updateTodo(todo) {}

/**
 * 특정 할 일의 특정 태그를 수정합니다.
 * @param {Object} todo
 * @param {string} todo.todoId - 할 일 id
 * @param {string[]} todo.tags - 태그
 */
function updateTagById(todo) {}

/**
 * userId를 기반으로 특정 할 일을 삭제합니다.
 * @param {string} todoId - 할 일 id
 */
function removeTodoById(todoId) {}

/**
 * 모든 할 일을 제거합니다.
 * @returns {*} 성공 완료 여부
 */
function removeAllTodo() {}

/**
 * 특정 할 일의 특정 태그를 삭제합니다.
 * @param {Object} todo - 할 일
 * @param {string} todo.todoId - 할 일 id
 * @param {string[]} todo.tags - 태그
 */
function removeTag(todo) {}

/**
 * 특정 할 일의 모든 태그를 삭제 합니다.
 * @param {string} todoId - 할 일 id
 */
function removeAllTags() {}
