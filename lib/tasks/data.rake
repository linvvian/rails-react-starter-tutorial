namespace :data do

  desc "seed database"
  task seed: :environment do
    Quote.delete_all
    Quote.create! (
      [
        {
          index: 1,
          text: "Be yourself; everyone else is already taken.",
          author: "Oscar Wilde"
        },
        {
          index: 2,
          text: "Two things are infinite: the universe and human stupidity; " \
                "and I'm not sure about the universe.",
          author: "Albert Einstein"
        },
        {
          index: 3,
          text: "So many books, so little time.",
          author: "Frank Zappa"
        },
        {
          index: 4,
          text: "Be the change that you wish to see in the world",
          author: "Mahatma Gandhi"
        },
        {
          index: 5,
          text: "If you tell the truth, you don't have to remember anything.",
          author: "Mark Twain"
        }
      ]
    )
    puts "Quotes seeded!"
  end

end
