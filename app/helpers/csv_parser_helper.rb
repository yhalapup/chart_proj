module CsvParserHelper

  DEFAULT_CSV_OPTIONS = {
    headers: true,
    converters: :all
  }

  def format_date_string(date_str, format = "%m/%d/%y")
    date_str.to_date.strftime(format)
  end

  def sum_values(hash_arr, value_title)
    hash_arr.sum {|hash| hash[value_title]}
  end

  def total_tests_count(row)
    row["passed_tests_count"] + row["failed_tests_count"]
  end

  # abnormal - are tests which have more than 1% failing test
  # from total count of tests
  def is_abnormal?(row)
    total_tests_count(row) < row["failed_tests_count"] * 100
  end

  def read_csv_data(path)
    CSV.read(path, DEFAULT_CSV_OPTIONS)
  end
end
