json.partial! 'api/runs/run', run: @run
json.extract! @run.runner, :id, :fname, :lname, :email
