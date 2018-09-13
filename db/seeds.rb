# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Run.destroy_all

users = User.create([
  {email: "Michael@gmail.com", fname: "Michael", lname: "Schwartz", password: "Michael"},
  {email: "Michael1@gmail.com", fname: "Michael1", lname: "Schwartz", password: "Michael"},
  {email: "Michael2@gmail.com", fname: "Michael2", lname: "Schwartz", password: "Michael"},
  ])

runs = Run.create([
  {name: "Run1", run_map: "test1", location: "New York", distance: 3, duration: 3600, runner_id: User.first.id, completed_run: false},
  {name: "Run2", run_map: "test2", location: "New York", distance: 4, duration: 1800, runner_id: User.second.id, completed_run: false},
  {name: "Run3", run_map: "test3", location: "New York", distance: 5, duration: 7200, runner_id: User.third.id, completed_run: false},
  ])
