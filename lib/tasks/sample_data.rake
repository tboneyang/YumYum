namespace :db do
  desc "Fill database with sample data"
  task populate: :environment do
    admin = User.create!(name: "Example User",
                         email: "example@railstutorial.org",
                         password: "foobar",
                         password_confirmation: "foobar",
                         admin: true)
    20.times do |n|
      name  = Faker::Name.name
      email = "example-#{n+1}@railstutorial.org"
      password  = "password"
      User.create!(name: name,
                   email: email,
                   password: password,
                   password_confirmation: password)
    end
    
    users = User.all.limit(6)
    20.times do
      content = Faker::Lorem.sentence(5)
      users.each { |user| user.foodposts.create!(content: content,
                                                 start_time: Time.now,
                                                 end_time: Time.now + (60*60),
                                                 location: "Rickets 201",
                                                 date: Time.now)}
    end
  end
end
