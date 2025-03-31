import { Button } from "@/components/shared/button/button";
import { Icon } from "@/components/shared/icons/icons";
import { InputRadio } from "@/components/shared/input-radio/input-radio";
import { Input } from "@/components/shared/input/input";
import { filterOptions } from "@/hooks/activity-filter";
import { useActivityStore } from "@/providers/activity-store-provider";
import { useState } from "react";
import styles from "./activity-filter.module.css";

export const ActivityFilter = () => {
  const [showPanel, setShowPanel] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const filter = useActivityStore((state) => state.form.filter);
  const { setFilter, setDate } = useActivityStore((state) => state);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFilter(event.target.value);
  };

  const onClick = () => {
    setShowPanel(!showPanel);
  };

  const applyFilter = () => {
    if (selectedFilter !== "other") {
      setDate("");
    }
    setFilter(selectedFilter);
    setShowPanel(!showPanel);
  };

  const onSelectDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    if (selectedFilter === "other") applyFilter();
  };

  return (
    <div className={styles.activityFilterContainer}>
      <Button type="button" color="primary" size="large" onClick={onClick}>
        Filtrar
        <Icon icon="filter" color="primary" />
      </Button>
      {showPanel && (
        <div className={styles.activityFilter}>
          <div className={styles.header}>
            <div className={styles.title}>
              <span>Periodo</span>
              <Icon icon="caret-down" color="black" />
            </div>
            <div
              className={styles.delete}
              onClick={() => setSelectedFilter("")}
            >
              Borrar filtros
            </div>
          </div>
          <ul className={styles.content}>
            {Object.keys(filterOptions)
              .filter((key) => filterOptions[key].isVisible)
              .map((key, index) => (
                <li key={index}>
                  <label
                    className={`${styles.label} ${filter === key && styles.selected}`}
                  >
                    {filterOptions[key].label}
                    <InputRadio
                      name="filter"
                      value={key}
                      onChange={onChange}
                      checked={selectedFilter === key}
                    />
                  </label>
                </li>
              ))}
            <li key={"other2"}>
              <label
                className={`${styles.label} ${filter === "other" && styles.selected}`}
                onClick={() => setSelectedFilter("other")}
              >
                Otro periodo
                <Icon icon="caret-right" color="black" />
              </label>
            </li>
            {selectedFilter === "other" && (
              <li key={"other-date-picker"}>
                <Input
                  type="date"
                  fieldName="range"
                  width="full"
                  placeholder="dd/mm/aaaa"
                  onChange={onSelectDate}
                />
              </li>
            )}
            <li>
              <Button
                type="button"
                color="primary"
                size="small"
                width="full"
                onClick={applyFilter}
              >
                Aplicar
              </Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
