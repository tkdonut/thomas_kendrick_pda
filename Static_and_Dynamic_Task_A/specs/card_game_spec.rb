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
end
