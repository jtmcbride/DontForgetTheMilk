## Component Heirarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Splash
 - Login
 - Signup

**AppContainer**
 - AppHeader
  * searchBar
  * notification

 - TaskSidebar
  *  inbox
  *  AllTasks
  *  Today
  *  Tomorrow
  *  Week
  *  ListsIndex
    + ListsIndexItem

- ListContainer
  * ListHeader
  * TaskList


 - TaskContainer
  * TaskDetail
  * ListDetail
  * TasksHeader
    + NewTaskForm
    + EditTaskForm
## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "AppContainer" |
| "/list/:listId" | "ListContainer" |
| "/list/:listId/task/:taskId" | "TaskContainer" |
| "/all" | "ListContainer" |
| "/today" | "ListContainer" |
| "/tomorrow" | "ListContainer" |
| "/week" | "ListContainer" |
