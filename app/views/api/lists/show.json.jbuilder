
json.list @list

json.tasks do
	@list.tasks.each do |task|
		json.set! task.id do
			json.extract! task, :name, :completed
		end
	end
end
