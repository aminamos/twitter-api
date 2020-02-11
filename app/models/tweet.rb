class Tweet < ApplicationRecord
  has_many :edits
  has_many :likes
end
