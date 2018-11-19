# Stylelint Config

Currently only extends `stylelint-config-recommended`.

## Usage

In your configuration set `extends` to use this package.

```json
{
    "extends": "stylelint-config"
}
```

### Loading the configuration object

Finding and loading of your configuration object is done with [cosmiconfig](https://github.com/davidtheclark/cosmiconfig). Starting from the current working directory, it will look for the following possible sources, in this order:

-   a `stylelint` property in `package.json`
-   a `.stylelintrc` file
-   a `stylelint.config.js` file exporting a JS object

The `.stylelintrc` file (without extension) can be in JSON or YAML format. Alternately, you can add a filename extension to designate JSON, YAML, or JS format: `.stylelintrc.json`, `.stylelintrc.yaml`, `.stylelintrc.yml`, `.stylelintrc.js`. You may want to use an extension so that your text editor can better interpret the file, and help with syntax checking and highlighting.

Once one of these is found and parsed, the search will stop and that object will be used.

The configuration search can be short-circuited by using either the `config` or `configFile` options.
