
json.list @list
json.count @incomplete_tasks.count

json.tasks do
  if @incomplete_tasks.empty?
    json.incomplete({})
  else
  	json.incomplete do
  		@incomplete_tasks.each do |task|
  			json.set! task.id do
  				json.extract! task, :id, :name, :priority, :completed, :due_date, :start_date, :estimate
  			end
  		end
  	end
  end
  if @completed_tasks.empty?
    json.completed({})
  else
  	json.completed do
  		@completed_tasks.each do |task|
  			json.set! task.id do
  				json.extract! task, :id, :name, :priority, :completed, :due_date, :start_date, :estimate
  			end
  		end
  	end
  end
end
