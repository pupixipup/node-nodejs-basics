const parseEnv = () => {
  process.env.RSS_name = "value1";
  process.env.RSS_name2 = "value2";
  const vars = Object.keys(process.env);
  const rss_keys = vars.filter((item) => String(item).startsWith("RSS_"));
  const rss_vars = rss_keys.map((key) => key + ":" + process.env[key]).join(";");
  console.log(rss_vars)
};

parseEnv();