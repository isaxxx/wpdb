FROM wordpress:latest
COPY php.ini /usr/local/etc/php/
RUN apt-get update && apt-get install -y less wget subversion default-mysql-client unzip
RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar && chmod +x wp-cli.phar && mv wp-cli.phar /usr/local/bin/wp
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer require "squizlabs/php_codesniffer=*"
RUN composer require "fabpot/php-cs-fixer"
