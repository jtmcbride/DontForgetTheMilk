
json.list @list

json.tasks do
  if @incomplete_tasks.empty?
    json.incomplete({})
  else
  	json.incomplete do
  		@incomplete_tasks.each do |task|
  			json.set! task.id do
  				json.extract! task, :name, :completed
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
  				json.extract! task, :name, :completed
  			end
  		end
  	end
  end
end
