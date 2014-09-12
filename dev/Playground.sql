set stmt = (select 
    group_concat(COLUMN_NAME ORDER BY ORDINAL_POSITION ASC separator ', ')
from
    information_schema.columns
where
    table_name = 'test_data');

set stmt = concat_ws(' ', 'select', @stmt, 'from', 'test_data');
prepare sel_stmt from @stmt;
select @stmt;
execute sel_stmt;



set @key_count = (select count(*) from
    information_schema.columns
where
    table_name = 'test_data' and column_key = 'PRI');

select @key_count;



select * from
    information_schema.columns
where
    table_name = 'test_data';


select concat('aaa', null);
select concat(null, 'aaa');

SELECT DATABASE();




--  req v5.0.10 onwards
select * from 
	information_schema.TRIGGERS
where
    table_name = 'test_data';