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
  {email: "Demo@gmail.com", fname: "Demo", lname: "User", password: "Testing123"},
  {email: "Demo1@gmail.com", fname: "Demo1", lname: "User", password: "Testing123"},
  {email: "Demo2@gmail.com", fname: "Demo3", lname: "User", password: "Testing123"},
  ])

runs = Run.create([
  {name: "NYC-Midtown", run_map: "ysvwFtsqbMBUfAVhDj@uRpm@_AzC_@nAQd@wBtGcC_BsBsAWQ{AeAiG}D_G{DnSoo@??t@cCFQzBzAmFtPmFxPqFtP{B{A{FuDpFwPbDgKd@sAtEaOfAgDlD_L", location: "New York", distance: 2.915, duration: 1405, runner_id: User.first.id, completed_run: true},
  {name: "NYC-UWS", run_map: "_|{wFjtobM\\TnGaS}DkC{M{ImJkGqDaCuA{@gCcByG~S??eErM}B{A}B}AyFqD{FyD}B}AzCoJ??tAiEzBzA|FtDeMr`@??Y~@|BzAxFvDbGxDjB}FNLpBbBhBzA^TrE~C", location: "New York", distance: 2.644, duration: 1235, runner_id: User.first.id, completed_run: true},
  {name: "NYC-LES", run_map: "knpwFt{qbMJi@oDyA@Uf@cCp@cDrB_KrAsGp@gDnFxBp@mDMAaCaA??}Aq@|C_OhKhE`HvCm@zC??s@jDCLPLbAb@d@PpGnCLFNs@BQVLDJFl@RxF{@e@", location: "New York", distance: 1.408, duration: 635, runner_id: User.first.id, completed_run: true},
  ])
