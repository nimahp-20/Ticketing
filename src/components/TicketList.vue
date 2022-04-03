<template>
  <div class="q-pa-md q-ma-xs col-12 justify-center">
    <div>
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="name"
        :separator="separator"
      >
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
              class="sdd"
            >
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>
        <template v-slot:body-cell-priority="props">
          <q-td :props="props">
            <div>
              <q-badge
                :label="props.value"
                :class="
                  props.value === 'High'
                    ? 'priority-high '
                    : 'bg-white text-black' && props.value === 'Low'
                    ? 'priority-low '
                    : 'bg-white text-black' && props.value === 'Medium'
                    ? 'priority-medium '
                    : 'bg-white text-black'
                "
              >
              </q-badge>
            </div>
          </q-td>
        </template>
        <template v-slot:body-cell-number="props">
          <q-td :props="props" class="sdd">
            <div>
              <q-badge class="sdd" :label="props.value"></q-badge>
            </div>
          </q-td>
        </template>
        <template v-slot:body-cell-status="props">
          <q-td :props="props">
            <div>
              <q-badge
                :class="
                  props.value === 'Open'
                    ? 'status-open'
                    : 'bg-white text-black' && props.value === 'Closed'
                    ? 'status-close '
                    : 'bg-white text-black' && props.value === 'Replied'
                    ? 'status-replied '
                    : 'bg-white text-black' && props.value === 'Pending'
                    ? 'status-pending'
                    : 'bg-white text-black'
                "
                :label="props.value"
              ></q-badge>
            </div>
          </q-td>
        </template>
      </q-table>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  data() {
    return {
      separator: ref("cell"),
      columns: [
        {
          name: "number",
          required: true,
          label: "Number",
          align: "center",
          field: (row) => row.number,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "subject",
          align: "center",
          label: "Subject",
          field: "subject",
          sortable: true,
        },
        {
          name: "message",
          label: "Message",
          field: "message",
          sortable: true,
          align: "center",
        },
        {
          name: "status",
          label: "Status",
          field: "status",
          sortable: true,
          align: "center",
        },
        {
          name: "priority",
          label: "Priority",
          field: "priority",
          sortable: true,
          align: "center",
        },
        {
          name: "date",
          label: "Date",
          field: "date",
          sortable: true,
          align: "center",
        },
      ],
      rows: [
        {
          number: 1,
          subject: "This is First Subject",
          message: "This is Random Message",
          status: "Open",
          priority: "High",
          date: "24 Jul 2022",
        },
        {
          number: 2,
          subject: "This is Second Subject",
          message: "This is Random Message",
          status: "Open",
          priority: "Medium",
          date: "17 Jul 2022",
        },
        {
          number: 3,
          subject: "This is Thard Subject",
          message: "Why my Question is Hard",
          status: "Pending",
          priority: "High",
          date: "12 Jul 2022",
        },
        {
          number: 4,
          subject: "This is Forth Subject",
          message: "Let Me Know What im Tallking About",
          status: "Replied",
          priority: "Low",
          date: "16 Jul 2022",
        },
        {
          number: 5,
          subject: "This is Fiveth Subject",
          message: "This is a Message For Test ",
          status: "Closed",
          priority: "Medium",
          date: "20 Jul 2022",
        },
      ],
    };
  },
};
</script>
<style scoped>
.form {
  background-color: gray;
  color: white;
}

.bgnumber {
  background-color: aqua;
}
.borderForms {
  border: 1px solid black;
}

.priority-high {
  color: white;
  background-color: red;
}
.priority-medium {
  color: white;
  background-color: rgb(221, 197, 87);
}
.priority-low {
  color: white;
  background-color: green;
}
.status-close {
  color: white;
  background-color: red;
}
.status-open {
  color: white;
  background-color: green;
}
.status-replied {
  color: white;
  background-color: rgb(0, 140, 255);
}
.status-pending {
  color: white;
  background-color: black;
}
.sdd {
  background-color: #6f00ff;
  color: white;
  font-size: 15px;
}
.badge-clor {
  color: white;
  background-color: transparent;
}
</style>
