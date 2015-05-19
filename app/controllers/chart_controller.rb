class ChartController < ApplicationController
  def index
    parser = CSVParser.new("public/session_history.csv")
    # w/o grouping
    @data = parser.result_hash(grouping: false).to_json
    # for group by date
    @data = parser.result_hash.to_json
  end
end
