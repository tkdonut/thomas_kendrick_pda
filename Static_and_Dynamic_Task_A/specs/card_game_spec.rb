require 'minitest/autorun'
require 'pry'
require_relative '../card.rb'
require_relative '../card_game.rb'

class TestCardGame < Minitest::Test
  def setup
    @card1 = Card.new('Heart',1)
    @card2 = Card.new('Heart',4)
    @card3 = Card.new('Heart',7)
    @cardgame = CardGame.new
  end

  def test_checkforAce__isAce
    assert_equal(true, @cardgame.checkforAce(@card1))
  end

  def test_checkforAce__isnotAce
    assert_equal(false, @cardgame.checkforAce(@card2))
  end

  def test_highest_card__last
    assert_equal(@card2, @cardgame.highest_card(@card1, @card2))
  end

  def test_highest_card__first
    assert_equal(@card2, @cardgame.highest_card(@card2, @card1))
  end
  
  def test_cards_total__threecards
    assert_equal(
      "You have a total of 12",
      CardGame.cards_total([@card1, @card2, @card3])
      )
  end
end
