module Jekyll
  module MyFilters
    def file_date(input)
      File.mtime(input)
    end
    def print_file_version(input)
        mod = File.mtime(input)
        version = "?ver=" + mod.strftime("%Y.%m.%d-%H%M%S")
        version
    end
  end
end

Liquid::Template.register_filter(Jekyll::MyFilters)
