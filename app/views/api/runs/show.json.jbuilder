json.key_format! camelize: :lower
json.partial! 'api/runs/run', run: @run
json.extract! @run.runner, :fname, :lname, :email
